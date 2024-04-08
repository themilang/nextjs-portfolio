interface ContactFormData {
    // Define your interface for the contact form data
    // You can adjust this according to the structure of your form data
    name: string;
    email: string;
    message: string;
    // Add more fields if necessary
  }
  
  export const sendContactForm = async (data: ContactFormData): Promise<any> => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
  
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
  
      return await response.json();
    } catch (error) {
      // Handle errors here
      console.error(error);
      throw error;
    }
  };
  