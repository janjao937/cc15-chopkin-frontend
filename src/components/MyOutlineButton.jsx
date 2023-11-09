export default function MyOutlineButton({
  children,
  outlinestyle,
  textstyle,
  onClick,
}) {
  return (
    <>
      <button
        onClick={onClick}
        className={`${outlinestyle} cursor-pointer outline rounded-full outline-2 py-1 px-4`}
      >
        <div className={`${textstyle}`}>{children}</div>
      </button>
    </>
  );
}
