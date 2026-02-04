'use client';

interface OpenTableWidgetProps {
  restaurantId: string;
  location: 'frisco' | 'lewisville';
  className?: string;
  buttonText?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function OpenTableWidget({
  restaurantId,
  location,
  className = '',
  buttonText = 'Reserve Your Table',
  variant = 'primary',
}: OpenTableWidgetProps) {
  const handleReservation = () => {
    // Open OpenTable in a new tab
    const openTableUrl = `https://www.opentable.com/restref/client/?rid=${restaurantId}&lang=en-US&ot_source=Restaurant%20website`;
    window.open(openTableUrl, '_blank', 'noopener,noreferrer');
  };

  const buttonVariants = {
    primary: 'btn btn-primary btn-shimmer',
    secondary: 'btn btn-secondary',
    outline: 'btn btn-outline border-white text-white hover:bg-white hover:text-charcoal',
  };

  return (
    <button
      onClick={handleReservation}
      className={`${buttonVariants[variant]} ${className}`}
      type="button"
    >
      <svg
        className="w-5 h-5 inline-block mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      {buttonText}
    </button>
  );
}
