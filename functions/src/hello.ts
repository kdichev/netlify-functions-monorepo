export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      text: "Hello, World! I’m some text sent from a Lambda functions.",
    }),
  };
}
