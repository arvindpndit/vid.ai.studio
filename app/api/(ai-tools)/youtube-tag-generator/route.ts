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

    // Create prompt for video ideas
    const prompt = `You are a YouTube creator and expert assistant specialized in content strategy.
        QUERY: ${query}
        Generate 10 relevant and trending YouTube tags related to this query in camel case.
        IMPORTANT: Format your response with EXACTLY ONE tag per line, with NO quotation marks, NO brackets, NO commas, and NO additional text or spacing.
        Example of CORRECT format:
        webDesign
        codingInterviews
        seoTips
        
        Example of INCORRECT format:
        ["webDesign"]
        or
        "webDesign"
        or
        1. webDesign`;

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Split the text into an array by newlines and filter out empty lines
    const data = text.split('\n').filter((line) => line.trim() !== '');

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error querying Gemini API:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}

