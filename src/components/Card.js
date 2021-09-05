import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import CropDinIcon from "@material-ui/icons/CropDin";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
function Card({  image, name, mail, Trend, date, description }) {
  return (
    <>
      <div className="flex flex-col bg-white rounded border-solid sm:mr-2 m-3 mb-2">
        <header className="flex items-center border-b-2  mb-1 p-3">
          <img src={image} className="w-10 h-10 rounded-full border-2 shadow" />
          <div className="flex-1 pl-2">
            <p className="flex">
              <p>{name}</p>
              <p className="text-blue-500 font-medium text-base pl-1">{mail}</p>
              <p className="pl-1">
                Takipçi:
                <span className="pl-1 font-bold text-gray-600">{Trend}</span>
              </p>
            </p>
            <p className="text-gray-400 font-normal">{date}</p>
          </div>
          <div>
            <IconButton>
              <MoreVertIcon color="disabled" fontSize="small" />
            </IconButton>
          </div>
        </header>
        <main className="flex p-3">
          <div className="pr-1">
            <CropDinIcon color="disabled" />
          </div>
          <div>
            <h2 className="font-medium">{description}</h2>
          </div>
        </main>
        <footer className="p-3 flex">
          <div className="pr-2">
            <StarBorderIcon color="disabled" fontSize="small" />
          </div>
          <div className="pr-2">
            <DeleteOutlineIcon color="disabled" fontSize="small" />
          </div>
          <div>
            <DeviceHubIcon color="disabled" fontSize="small" />
          </div>
        </footer>
      </div>
    </>
  );
}

export default Card;
