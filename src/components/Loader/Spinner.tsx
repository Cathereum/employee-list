import "./Spinner.css";

type SpinnerProps = {
  size?: number;
  color?: string;
};

const Spinner = ({ size = 40, color = "#007bff" }: SpinnerProps) => {
  const spinnerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderTopColor: color,
  };

  return (
    <div className="spinner-container">
      <div className="spinner" style={spinnerStyle}></div>
    </div>
  );
};

export default Spinner;
