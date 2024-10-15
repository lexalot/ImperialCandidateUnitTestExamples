interface ButtonContainerProps {
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({
  onPrimaryClick,
  onSecondaryClick
}) => {
  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick()
    }
  }

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick()
    }
  }

  return (
    <div className="mt-8 flex justify-center space-x-4">
      <button
        onClick={handlePrimaryClick}
        className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
      >
        Primary Action
      </button>
      <button
        onClick={handleSecondaryClick}
        className="rounded border border-gray-300 bg-gray-200 px-6 py-2 text-gray-800 hover:bg-gray-100"
      >
        Secondary Action
      </button>
    </div>
  )
}

export default ButtonContainer
