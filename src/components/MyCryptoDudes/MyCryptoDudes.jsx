import React, { useState, useEffect } from "react";
import CryptoDudeNFTImage from "../CryptoDudeNFTImage/CryptoDudeNFTImage";
import MyCryptoDudeNFTDetails from "../MyCryptoDudeNFTDetails/MyCryptoDudeNFTDetails";
import Loading from "../Loading/Loading";

const MyCryptoDudes = ({
  accountAddress,
  cryptoDudes,
  totalTokensOwnedByAccount,
}) => {
  const [loading, setLoading] = useState(false);
  const [myCryptoDudes, setMyCryptoDudes] = useState([]);

  useEffect(() => {
    if (cryptoDudes.length !== 0) {
      if (cryptoDudes[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
    const my_crypto_boys = cryptoDudes.filter(
      (cryptoboy) => cryptoboy.currentOwner === accountAddress
    );
    setMyCryptoDudes(my_crypto_boys);
  }, [cryptoDudes]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of CryptoDude's You Own : {totalTokensOwnedByAccount}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {myCryptoDudes.map((cryptoboy) => {
          return (
            <div
              key={cryptoboy.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              <div className="row">
                <div className="col-md-6">
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
                </div>
                <div className="col-md-6 text-center">
                  <MyCryptoDudeNFTDetails
                    cryptoboy={cryptoboy}
                    accountAddress={accountAddress}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCryptoDudes;
