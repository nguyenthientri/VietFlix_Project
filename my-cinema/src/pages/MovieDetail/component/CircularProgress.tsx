interface CircularProgressProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    percentage_size?: string;
}

const CircularProgress = ({
    percentage,
    size = 128,
    strokeWidth = 8,
    percentage_size = "md",
}: CircularProgressProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    const getColor = (percentage: number): string => {
        if (percentage < 50) return "#FF4C4C"; // Red
        if (percentage < 80) return "#FFA500"; // Orange
        return "#21D07A"; // Green
    };

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg className="rotate-[-90deg]" width={size} height={size}>
                <circle
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
                <circle
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    stroke={getColor(percentage)}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    fill="transparent"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-[10px]">
                <p className={`text-${percentage_size}`}>{percentage}</p>
                <span className="md:text-[10px] text-[7px] pt-[1px]">%</span>
            </div>
        </div>
    );
};

export default CircularProgress;
