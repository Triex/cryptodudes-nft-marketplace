import React, { useState, useEffect } from "react";
import CryptoDudeNFTImage from "../CryptoDudeNFTImage/CryptoDudeNFTImage";
import CryptoDudeNFTDetails from "../CryptoDudeNFTDetails/CryptoDudeNFTDetails";
import Loading from "../Loading/Loading";

const AllCryptoDudes = ({
  cryptoDudes,
  accountAddress,
  totalTokensMinted,
  changeTokenPrice,
  toggleForSale,
  buyCryptoDude,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cryptoDudes.length !== 0) {
      if (cryptoDudes[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
  }, [cryptoDudes]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of CryptoDude's Minted On The Platform :{" "}
            {totalTokensMinted}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {cryptoDudes.map((cryptoboy) => {
          return (
            <div
              key={cryptoboy.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              {!loading ? (
                <CryptoDudeNFTImage
                  colors={
                    cryptoboy.metaData !== undefined
                      ? cryptoboy.metaData.metaData.colors
                      : ""
                  }
                />
              ) : (
                <Loading />
              )}
              <CryptoDudeNFTDetails
                cryptoboy={cryptoboy}
                accountAddress={accountAddress}
                changeTokenPrice={changeTokenPrice}
                toggleForSale={toggleForSale}
                buyCryptoDude={buyCryptoDude}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCryptoDudes;
