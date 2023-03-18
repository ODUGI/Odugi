const validateUrl = (text: string) => {
  return /(https?:\/\/[^\s]+)/g.test(text);
};

export default validateUrl;
