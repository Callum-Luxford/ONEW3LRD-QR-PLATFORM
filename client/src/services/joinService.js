export async function submitJoinForm(formData) {
  console.log("Prototype form submission:", formData);

  return Promise.resolve({
    success: true,
    message: "Prototype only. Form submission is not connected yet.",
  });
}
