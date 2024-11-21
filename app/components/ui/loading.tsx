export default function Loading({
  color1 = "white",
  color2 = "gray",
  color3 = "gray",
}: {
  color1?: string;
  color2?: string;
  color3?: string;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-white"
    >
      <rect x="1" y="1" rx="1" width="10" height="10">
        <animate
          id="spinner_c7A9"
          begin="0;spinner_23zP.end"
          attributeName="x"
          dur="0.2s"
          values="1;13"
          fill="freeze"
        />
        <animate
          id="spinner_Acnw"
          begin="spinner_ZmWi.end"
          attributeName="y"
          dur="0.2s"
          values="1;13"
          fill="freeze"
        />
        <animate
          id="spinner_iIcm"
          begin="spinner_zfQN.end"
          attributeName="x"
          dur="0.2s"
          values="13;1"
          fill="freeze"
        />
        <animate
          id="spinner_WX4U"
          begin="spinner_rRAc.end"
          attributeName="y"
          dur="0.2s"
          values="13;1"
          fill="freeze"
        />
      </rect>
      <rect x="1" y="13" rx="1" width="10" height="10">
        <animate
          id="spinner_YLx7"
          begin="spinner_c7A9.end"
          attributeName="y"
          dur="0.2s"
          values="13;1"
          fill="freeze"
        />
        <animate
          id="spinner_vwnJ"
          begin="spinner_Acnw.end"
          attributeName="x"
          dur="0.2s"
          values="1;13"
          fill="freeze"
        />
        <animate
          id="spinner_KQuy"
          begin="spinner_iIcm.end"
          attributeName="y"
          dur="0.2s"
          values="1;13"
          fill="freeze"
        />
        <animate
          id="spinner_arKy"
          begin="spinner_WX4U.end"
          attributeName="x"
          dur="0.2s"
          values="13;1"
          fill="freeze"
        />
      </rect>
      <rect x="13" y="13" rx="1" width="10" height="10">
        <animate
          id="spinner_ZmWi"
          begin="spinner_YLx7.end"
          attributeName="x"
          dur="0.2s"
          values="13;1"
          fill="freeze"
        />
        <animate
          id="spinner_zfQN"
          begin="spinner_vwnJ.end"
          attributeName="y"
          dur="0.2s"
          values="13;1"
          fill="freeze"
        />
        <animate
          id="spinner_rRAc"
          begin="spinner_KQuy.end"
          attributeName="x"
          dur="0.2s"
          values="1;13"
          fill="freeze"
        />
        <animate
          id="spinner_23zP"
          begin="spinner_arKy.end"
          attributeName="y"
          dur="0.2s"
          values="1;13"
          fill="freeze"
        />
      </rect>
    </svg>
  );
}
