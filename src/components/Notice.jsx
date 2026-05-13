import PBImage from "./PBImage";

export default function Notice() {
  return (
    <section className="vmNotice">
      <div className="pbContainer">
        <div className="vmNoticeInner">
          <div className="vmNoticeContent">
            <h2>AVE™ cosmetics companies Affiliate Notice</h2>
            <p>
              avecosmetico.com is a platform operated by an independent
              consultant affiliate on the MK platform. This site is not owned or
              operated by Mary Kay Inc. Purchases occur on the official Mary Kay
              shop.
            </p>
          </div>

          <div className="vmNoticeMedia">
            <PBImage
              src="/images/notices.jpg"
              alt="AVE Cosmetics affiliate notice"
              fill
              className="vmNoticeImg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}