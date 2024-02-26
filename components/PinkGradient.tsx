const PinkGradient = ({ text }: { text: string }) => {
  return (
    <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-pink-600 via-pink-600 to-indigo-600 py-8">
      {text}
    </p>
  );
};

export default PinkGradient;
