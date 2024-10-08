const Badge = ({ color, text }) => {
  return (
    <span style={{ backgroundColor: color }}>
      {text}
    </span>
  );
};

export default Badge;
