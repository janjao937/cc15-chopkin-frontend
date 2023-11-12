import React from "react";
import Menu from "../customer/Menu";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import { useState } from "react";
import Avatar from "../../components/Avatar";
import PictureForm from "./PictureForm";
import useAuth from "../../Hooks/use-auth";
import Loading from "../../components/Loading";

export default function AsideMenu({ profileImg, imageBlank }) {
	console.log("profileImg =>", profileImg);

	const { uploadProfile } = useAuth();
	const [loading, setLoading] = useState(false);

	const { userId } = useParams();

	const uploadProfileImage = async (file) => {
		try {
			const formData = new FormData();
			formData.append("profileImg", file);
			setLoading(true);
			await uploadProfile(formData);
			window.location.reload();
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<aside className="col-span-2 flex flex-col gap-4">
			<div className="flex flex-col items-center justify-center gap-2">
				{loading && <Loading />}
				<PictureForm
					initialSrc={profileImg}
					onSave={uploadProfileImage}
				>
					{(src, onClick = { onClick }) => <Avatar src={src} />}
				</PictureForm>
			</div>

			<Menu />
		</aside>
	);
}
