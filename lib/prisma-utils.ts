import { Prisma } from "@prisma/client";

export function handlePrismaError(error: unknown, context: string) {
  console.error(`Error in ${context}:`, error);

  let errorMessage = "An unexpected error occurred";

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2021":
        errorMessage = "Table does not exist";
        console.error("Table does not exist");
        break;
      case "P2022":
        errorMessage = "Column does not exist";
        console.error("Column does not exist");
        break;
      case "P2025":
        errorMessage = "Record not found";
        console.error("Record not found");
        break;
      case "P2002":
        errorMessage = "Unique constraint violation";
        console.error("Unique constraint violation");
        break;
      case "P2003":
        errorMessage = "Foreign key constraint violation";
        console.error("Foreign key constraint violation");
        break;
      default:
        errorMessage = `Database error: ${error.message}`;
        console.error("Database error:", error.message);
    }
  }

  return {
    success: false,
    error: errorMessage,
    code:
      error instanceof Prisma.PrismaClientKnownRequestError
        ? error.code
        : undefined,
  };
}

// for operations that return data
export async function withPrismaErrorHandling<T>(
  operation: () => Promise<T>,
  context: string,
  fallback: T
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    handlePrismaError(error, context);
    return fallback;
  }
}

// for operations that return success/error response (in this case, delete)
export async function withPrismaResponse<T>(
  operation: () => Promise<T>,
  context: string,
  successMessage: string
): Promise<{ success: boolean; message: string; data?: T; error?: string }> {
  try {
    const result = await operation();
    return {
      success: true,
      message: successMessage,
      data: result,
    };
  } catch (error) {
    const errorResult = handlePrismaError(error, context);
    return {
      success: false,
      message: errorResult.error,
      error: errorResult.error,
    };
  }
}
