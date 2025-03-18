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
        Generate 10 engaging, trending YouTube video ideas related to this query. Include a brief description of what the video would cover.
        IMPORTANT: Format your response with EXACTLY ONE video idea per line, with NO quotation marks, NO brackets, NO commas, and NO additional text. Each line should have a title and a VERY brief description separated by a dash (-).
        Example of CORRECT format:
        How to Build a Portfolio Website in 1 Hour - Step-by-step guide using templates
        5 Web Design Trends for 2025 - Showcase of cutting-edge design elements
        Coding Interview Preparation Guide - Practice problems and solutions
        
        Example of INCORRECT format:
        ["How to Build a Portfolio Website in 1 Hour - Step-by-step guide using templates"]
        or
        "How to Build a Portfolio Website in 1 Hour"
        or
        1. How to Build a Portfolio Website in 1 Hour`;
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

