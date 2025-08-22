export default function LoadingIndicator() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600 border-solid"></div>
      <span className="ml-4 text-indigo-600 text-lg">Loading...</span>
    </div>
  );
}
