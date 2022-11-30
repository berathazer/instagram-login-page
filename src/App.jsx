import { useEffect, useRef, useState } from "react";
import { AiFillFacebook, AiOutlineDown } from "react-icons/ai";



export default function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const ref = useRef();


  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      current = 0;
    let total = 4;

    const ImageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      images[current].classList.remove("opacity-0");
      if (current !== total - 1) {
        current++;
      } else {
        current = 0;
      }
    };
    ImageSlider();

    let interval = setInterval(ImageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  const typeSelector = () => {
    if (type === "password") {
      setType("text");
      return;
    }
    setType("password");
  };

  const buttonDisabled = !(username.length > 5 && password.length > 5);

 

  return (
    <div className="w-full min-h-screen bg-[#fafafa] pt-8">

      {/*Center */}
      <div className="flex items-center justify-center gap-x-8 pb-8">
        {/*left side */}
        <div
          className="w-[381px] h-[581px] bg-phonePhoto  bg-left-4 relative bg-fitScreen hidden md:block "
          ref={ref}
        >
          <img
            className="w-[250px] h-[538px] absolute  top-7 right-[18px] opacity-0 transition-opacity ease-linear duration-[1500ms]"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
            alt=""
          />
          <img
            className="w-[250px] h-[538px] absolute top-7 right-[18px] opacity-0 transition-opacity ease-linear duration-[1500ms]"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"
            alt=""
          />
          <img
            className="w-[250px] h-[538px] absolute top-7 right-[18px] opacity-0 transition-opacity ease-linear duration-[1500ms]"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
            alt=""
          />
          <img
            className="w-[250px] h-[538px] absolute top-7 right-[18px] opacity-0 transition-opacity ease-linear duration-[1500ms]"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
            alt=""
          />
        </div>
        {/*left side end */}

        {/*right side form */}
        <div className="w-[350px] h-[581px] pt-[12px]">
          {/* Section 1 start*/}
          <div className="flex items-center justify-center flex-col border-[#dbdbdb] border-[1.5px] h-[395px]  py-[10px] pb-[20px]  bg-[#fff]">
            <img
              className="w-[175px] h-[51px] mt-9 mb-2"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt=""
            />

            <div className="w-[348px] h-[264.6px] flex flex-col items-center mt-6 justify-between">
              <div className="relative ">
                <label
                  htmlFor="usernameInput"
                  className={`transition-all duration-100 absolute cursor-text text-[12px] ${
                    username.length > 0
                      ? " -top-[2px] left-2 text-[10px] my-[4px]"
                      : "top-2 left-2"
                  } text-textLink`}
                >
                  Telefon numarası, kullanıcı adı veya e-posta
                </label>
                <input
                  type="text"
                  id="usernameInput"
                  className={`text-[12px] pl-[6px]   ${
                    username.length > 0 && "pl-[8px] pt-[14px] pb-[2px] "
                  } focus:cursor-text bg-login-input border-[0.5px] rounded-sm w-[258px] h-[36px] pr-2`}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>

              {
                <div className="relative bottom-[10px] bg-login-input border-[0.5px] rounded-sm w-[258px] h-[36px]">
                  <label
                    htmlFor="passwordInput"
                    className={`transition-all duration-100 absolute cursor-text text-[12px] ${
                      password.length > 0
                        ? " -top-[2px] left-2 text-[10px] my-[4px]"
                        : "top-2 left-2 "
                    } text-textLink `}
                  >
                    Şifre{" "}
                  </label>
                  <div className="flex items-center justify-between">
                    <input
                      type={type}
                      id="passwordInput"
                      className={`text-[12px] pl-[6px]   ${
                        password.length > 0 && "pl-[8px] pt-[14px] pb-[2px] "
                      } focus:cursor-text bg-login-input focus:outline-none focus:border-none w-[258px] h-[36px] pr-2`}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <button
                      onClick={typeSelector}
                      className={`text-[14px] font-semibold pr-2 ${
                        password.length > 0 ? "visible" : "hidden"
                      }`}
                    >
                      {type === "password" ? "Göster" : "Gizle"}
                    </button>
                  </div>
                </div>
              }

              <div className=" relative bottom-[10px]">
                
                {buttonDisabled ? (
                  <button
                    disabled
                    className="disabled:bg-blue-200 bg-primary w-[258px] pt-[5px] pb-[5px] rounded-md text-[14px] text-white font-semibold"
                  >
                    Giriş yap
                  </button>
                ) : (
                  <button
                    className="disabled:bg-blue-200 bg-primary w-[258px] pt-[5px] pb-[5px] rounded-md text-[14px] text-white font-semibold"
                  >
                    Giriş yap
                  </button>
                )}
              </div>

              <div className="flex items-center justify-center mx-[40px] relative bottom-[10px]">
                <p className="w-[92px] border-b h-[0px]"></p>
                <p className="relative bottom-[2px] mr-[18px] ml-[18px] h-[15px] w-[37px]  text-[13px] text-center font-semibold text-[#8E8E8E]">
                  YA DA
                </p>
                <p className="w-[92px] border-b h-[0px]"></p>
              </div>

              <div className="">
                <button className="w-[268px] h-[20px] text-[14px] flex items-center justify-center gap-x-2 text-[#385185]">
                  <AiFillFacebook color="primary" className="text-xl " />{" "}
                  <span className="font-semibold">Facebook ile giriş yap</span>
                </button>
              </div>

              <div>
                <a
                  href=""
                  className="w-[348px] h-[16px] mt-[12px] text-[#00376b] text-[12px] pb-[10px]"
                >
                  Şifreni mi unuttun?
                </a>
              </div>
            </div>
          </div>
          {/* Section 1 end*/}

          {/* Section 2 start*/}
          <div className="bg-[#fff] flex items-center justify-center mt-[10px] py-[10px] w-[350px] h-[63px] text-[14px] border-[#dbdbdb] border-[1px]">
            <p>
              Hesabın yok mu?{" "}
              <a href="/accounts/emailsignup">
                <span className="text-primary font-semibold cursor-pointer">
                  Kaydol
                </span>
              </a>
            </p>
          </div>
          {/* Section 2 end*/}

          {/* Section 3 start*/}
          <div className="flex flex-col items-center justify-center">
            <p className="text-[14px] mx-[10px] my-[20px]">Uygulamayı indir.</p>
            <div className="flex justify-between items-center gap-x-2">
              <div className="">
                <a
                  href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-[136px] h-[40px]"
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="">
                <a
                  href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DE3B25629-EF4B-4A27-A6A5-12D596011886%26utm_content%3Dlo%26utm_medium%3Dbadge"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-[134.28px] h-[40px]"
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Section 3 end*/}
        </div>
        {/*right side end */}
      </div>
      {/*Center end */}

      {/* Footer */}
      <div className="w-full     flex items-center justify-center flex-col mt-[52px] flex-nowrap flex-1">
        <div className="inline-flex  items-center justify-center h-[23px] flex-wrap flex-1">
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              Meta
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              Hakkında
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              Blog
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              İş Fırsatları
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              Yardım
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              API
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              Gizlilik
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              Koşullar
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              Başlıca Hesaplar
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              Konu Etiketleri
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              Konumlar
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              İnstagram Lite
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              Kişi Yükleme ve Hesabı Olmayan Kişiler
            </a>
          </div>
        </div>

        <div className="inline-flex items-center justify-center h-[23px]  flex-wrap flex-1">
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              Dans
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              Yiyecek ve İçecek
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              Ev ve Bahçe
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              Müzik
            </a>
          </div>
          <div className="text-[12px] font-normal text-textLink mx-2 mb-[5px]">
            <a href="" className="mt-[-2px] mb-[-3px]">
              Görsel Sanatlar
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center text-[12px] text-textLink gap-x-4 pt-[12px] pb-[52px]">
          <div className="w-[50px] h-4">
            <label
              htmlFor=""
              className="flex items-center justify-center h-full w-full  gap-x-1"
            >
              <span>Türkçe</span>
              <span>
                <AiOutlineDown />
              </span>
            </label>
            <select
              name=""
              id=""
              className="h-full opacity-0 w-full  relative bottom-[18px] cursor-pointer  outline-none border-none border-0   bg-slate-50"
            >
              <option value="Türkçe" className="hover:opacity-100">
                Türkçe
              </option>
              <option value="Türkçe" className="hover:opacity-100">
                İngilizce
              </option>
              <option value="Türkçe" className="hover:opacity-100">
                İspanyolca
              </option>
            </select>
          </div>
          <span>© 2022 Instagram from Meta</span>
        </div>
      </div>
      {/* Footer end*/}
    </div>
  );
}
