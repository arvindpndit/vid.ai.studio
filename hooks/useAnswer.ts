import { useState } from 'react';

const useAnswer = (url: string) => {
  const [answerResult, setAnswerResult] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query }),
      });
      if (!response.ok) {
        throw new Error('Failed to get data :(');
      }
      const data = await response.json();
      setAnswerResult(data.data);
    } catch (err) {
      setError((err as Error).message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return {
    answerResult,
    query,
    setQuery,
    loading,
    error,
    copiedIndex,
    handleSubmit,
    copyToClipboard,
  };
};

export default useAnswer;

