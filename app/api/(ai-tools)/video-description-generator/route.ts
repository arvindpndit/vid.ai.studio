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
    const prompt = `You are a YouTube content expert. Based on the following topic, generate a compelling and SEO-friendly YouTube video description:
    
    QUERY: ${query}
    
    The description should:
    - Be engaging and informative.
    - Include key takeaways or highlights.
    - Encourage engagement (likes, comments, and subscriptions).
    - Be structured naturally, without timestamps.
    - Optionally include a short call-to-action (CTA).

    Example Output Format:
    
    "🚀 Want to master the art of off-road biking? In this video, we take the **Himalayan 450** on a thrilling adventure to test its power, suspension, and durability. 🏍️💨
    
    Whether you're a seasoned rider or just getting started, we'll break down its key features, handling, and real-world performance. Don't miss out on this exciting ride! 🌍🔥
    
    👉 Drop a comment below with your thoughts on the **Himalayan 450**!
    👍 Like this video if you found it helpful!
    🔔 Subscribe for more biking adventures and reviews!
    
    Generate a description in this format, making it concise, engaging, and SEO-friendly.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
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

