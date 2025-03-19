import { getChannelNameGenerationPrompt } from '@/utils/prompt';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
  try {
    // Extract query from the request
    const { query } = await request.json();

    // Check if query exists
    if (!query) {
      return NextResponse.json({ error: 'query is required' }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'API key is required' },
        { status: 400 },
      );
    }

    // Initialize the Gemini API
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Create prompt with explicit instructions about formatting
    const prompt = getChannelNameGenerationPrompt(query);

    // Generate content
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    // Process the text to ensure proper formatting
    // First, check if the response looks like JSON
    let data;
    try {
      // If it's JSON, parse it and extract the strings
      const possibleJson = JSON.parse(text);
      if (Array.isArray(possibleJson)) {
        data = possibleJson;
      } else {
        // Split by newlines as fallback
        data = text.split('\n').filter((line) => line.trim() !== '');
      }
    } catch (e) {
      // If it's not JSON, just split by newlines
      data = text.split('\n').filter((line) => line.trim() !== '');
    }

    // Clean up each item - remove quotes, numbers, etc.
    data = data
      .map((item) => {
        // Remove quotes, brackets, numbers at start, etc.
        return item.replace(/^["'\[\d\.\s]+(.*?)["',\]\s]*$/, '$1').trim();
      })
      .filter((item) => item !== '');

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error querying Gemini API:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}

