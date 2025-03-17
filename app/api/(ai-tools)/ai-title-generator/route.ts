import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
  try {
    // Extract both title and content from the request
    const { query } = await request.json();

    // Check if content exists (content is the actual question)
    if (!query) {
      return NextResponse.json({ error: 'query is required' }, { status: 400 });
    }
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: ' API key is required' },
        { status: 400 },
      );
    }

    // Initialize the Gemini API
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Create prompt
    const prompt = `You are a YouTube creator and expert assistant specialized in content strategy.
      QUERY: ${query}
      Generate 10 highly clickable, SEO-optimized YouTube video titles related to this query.
      IMPORTANT: Format your response as a JavaScript array of strings ONLY, with NO additional text, explanations, or formatting. Do not include any JSON syntax, backticks, or string indicators.
      Example of CORRECT format:
      React vs Next.js: ULTIMATE Showdown!
      React OR Next.js? Choose The RIGHT One!
      Next.js vs React: Which Is FASTER? (Test)
      Example of INCORRECT format:
      ["React vs Next.js: ULTIMATE Showdown!",
      "React OR Next.js? Choose The RIGHT One!"]
      or
      '''React vs Next.js: ULTIMATE Showdown!'''`;
    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Split the text into an array by newlines and filter out empty lines
    const titles = text.split('\n').filter((line) => line.trim() !== '');
    return NextResponse.json({ titles });
  } catch (error) {
    console.error('Error querying Gemini API:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}

