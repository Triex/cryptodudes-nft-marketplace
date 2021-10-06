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
      (cryptodude) => cryptodude.currentOwner === accountAddress
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
        {myCryptoDudes.map((cryptodude) => {
          return (
            <div
              key={cryptodude.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              <div className="row">
                <div className="col-md-6">
                  {!loading ? (
                    <CryptoDudeNFTImage
                      colors={
                        cryptodude.metaData !== undefined
                          ? cryptodude.metaData.metaData.colors
                          : ""
                      }
                      pixels={
                        cryptodude.metaData !== undefined
                          ? cryptodude.metaData.metaData.pixels
                          : ""
                      }
                    />
                  ) : (
                    <Loading />
                  )}
                </div>
                <div className="col-md-6 text-center">
                  <MyCryptoDudeNFTDetails
                    cryptodude={cryptodude}
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
