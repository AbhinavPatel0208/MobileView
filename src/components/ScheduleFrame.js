const ScheduleFrame = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 px-[13px] text-left text-base text-text font-nunito">
      <div className="flex flex-col items-start justify-start gap-[40px]">
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-[26.4px] w-6 relative object-cover"
            loading="eager"
            alt=""
            src="/iconlybolddocument@2x.png"
          />
          <div className="h-[22px] relative font-semibold inline-block opacity-[0.5]">
            Schedule
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-[26.4px] w-6 relative object-cover"
            loading="eager"
            alt=""
            src="/calendar@2x.png"
          />
          <div className="h-[22px] relative font-semibold inline-block opacity-[0.5]">
            Calendar
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[14px]">
          <img
            className="h-[26.4px] w-6 relative object-cover"
            loading="eager"
            alt=""
            src="/iconlyboldnotification@2x.png"
          />
          <div className="h-[22px] relative font-semibold inline-block opacity-[0.5]">
            Notification
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-[26.4px] w-6 relative object-cover"
            loading="eager"
            alt=""
            src="/iconlyboldsetting@2x.png"
          />
          <div className="relative font-semibold opacity-[0.5]">Settings</div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleFrame;
