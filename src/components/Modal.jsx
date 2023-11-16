export default function Modal({
	children,
	title,
	titleStyle,
	maxWidth = 27,
	open,
	onClose,
}) {
	return (
		<>
			{open && (
				<>
					<div className="fixed inset-0 bg-white opacity-40 z-30"></div>
					<div className="fixed inset-0 z-40 ">
						<div className="flex justify-center items-center min-h-full  p-4">
							<div
								className="rounded-lg w-full bg-white shadow-2xl border"
								style={{ maxWidth: `${maxWidth}rem` }}
							>
								<div
									className={`flex justify-between p-4 text-xl border-b ${titleStyle}`}
								>
									<div className="invisible">X</div>
									<div className={`font-bold text-white`}>
										{title}
									</div>
									<div
										className="text-gray-500 cursor-pointer"
										onClick={onClose}
									>
										X
									</div>
								</div>
								<div className="p-4">{children}</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}
