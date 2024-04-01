interface Props {
  actionText: string;
}

export default function ButtonComponent({ actionText }: Props) {
  return (
    <button className="mt-2 ml-2 bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:opacity-75">
      {actionText}
    </button>
  );
}
