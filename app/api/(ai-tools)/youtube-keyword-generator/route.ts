import { getKeywordGenerationPrompt } from '@/utils/prompt';
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

    // Create prompt for keyword generation
    const prompt = getKeywordGenerationPrompt(query);
    // Generate content
    const result = await model.generateContent(prompt);
    const response = result.response;
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

