import "./PortfolioSection.css";

export default function TextSection() {
  return (
    <section className="text-section">
      <div className="text-holder">
        <div className="head1">
          <div className="head-text">
            <div className="l1">
              <p className="paragraph">
                Employing people with{" "}
                <span className="text-span">extraordinary talents</span> isn&apos;t
                charity
                <br />
              </p>
            </div>

            <div className="l2">
              <p className="paragraph">—it&apos;s good business.</p>
            </div>
          </div>

          <div className="text-block-3">
            <em className="italic-text">~Richard Branson</em>
          </div>
        </div>
      </div>
    </section>
  );
}
