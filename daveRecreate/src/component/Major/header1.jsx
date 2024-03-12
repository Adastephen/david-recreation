import { React } from "react";

function Header1() {
  return (
    <>
      <div className="w-full bg-purple-600 m-5">
        <div className="w-10/12 m-auto flex justify-between my-2">
          {/* the 'contact us' and the 'have a question' in the header1 div */}
          <div className="text-white flex flex-col">
            {/* contact us div */}
            <div>
              <svg></svg>
              <span>
                <p>Contact us</p>
                <p>+1(214) 869-5511</p>
              </span>
            </div>

            {/* have a question div sec */}
            <div>
              <svg></svg>
              <span>
                <p>Have a question?</p>
                <p>support@dominionsystems.net</p>
              </span>
            </div>
          </div>

          {/*the second column in the header1 */}
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Header1;
