import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="w-[90%] mx-auto my-8 ">
      <Image
        src="https://st2.depositphotos.com/1006899/8089/i/450/depositphotos_80897014-stock-photo-page-not-found.jpg"
        width={1000}
        height={500}
        alt="not found page"
        className="w-full rounded"
      />
    </div>
  );
};

export default NotFoundPage;
