module.exports = {
  reverser: async (event, context) => {
    const reversedPayload = event.body.split('').reverse().join('');

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Thank you for the reverser!',
        payload: reversedPayload
      })
    }
  }
}