import { getDescriptionGenerationPrompt } from '@/utils/prompt';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json({ error: 'query is required' }, { status: 400 });
    }
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'API key is required' },
        { status: 400 },
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Updated prompt for generating a concise video description
    const prompt = getDescriptionGenerationPrompt(query);

    const result = await model.generateContent(prompt);
    const response = result.response;
    let text = response.text();

    text = text
      .split('\n') // Split by new lines
      .map((line) => line.trim()) // Trim spaces from each line
      .filter((line) => line.length > 0) // Remove empty lines
      .join(' '); // Join lines into a single paragraph

    return NextResponse.json({ data: [text] });
  } catch (error) {
    console.error('Error querying Gemini API:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}

