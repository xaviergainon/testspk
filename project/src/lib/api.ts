import { SignupInput } from './validation';

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export async function signup(data: SignupInput): Promise<ApiResponse<{ userId: string }>> {
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Une erreur est survenue');
    }

    return { data: result };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Une erreur est survenue',
    };
  }
}