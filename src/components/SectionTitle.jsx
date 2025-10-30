

const SectionTitle = ({ title }) => {
  return (
    <div
      className="relative flex justify-center items-center mx-auto my-10 rounded-[20px]"
      style={{
        width: "492.5px",
        height: "67px",
        boxShadow: `
          0px 1.99px 1.59px 0px #00000016,
          0px 4.53px 3.62px 0px #00000020,
          0px 7.88px 6.31px 0px #00000027,
          0px 12.52px 10.02px 0px #0000002E,
          0px 19.32px 15.46px 0px #00000034,
          0px 30.15px 24.12px 0px #0000003C,
          0px 50.05px 40.04px 0px #00000046,
          0px 100px 80px 0px #0000005C
        `,
      }}
    >
      <div
        className="relative flex justify-center items-center rounded-[20px] w-[476px] h-[67px]"
      >
        <div
          className="absolute left-0 bottom-0 w-[55px] h-[55px] rounded-bl-[20px]
          border-l-4 border-b-4"
          style={{
            borderImage:
              "linear-gradient(135deg, #FBD300 0%, #FFFFFF 100%) 1",
            borderImageSlice: 1,
          }}
        ></div>

        <div
          className="absolute right-0 top-0 w-[55px] h-[55px] rounded-tr-[20px]
          border-t-4 border-r-4"
          style={{
            borderImage:
              "linear-gradient(135deg, #FFFFFF 0%, #FBD300 100%) 1",
            borderImageSlice: 1,
          }}
        ></div>

        <h2 className="text-white text-[28px] font-bold text-center leading-[67px]">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;


