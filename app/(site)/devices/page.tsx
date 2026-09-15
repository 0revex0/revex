"use client";

import DevicesHero from "@/components/devices/DevicesHero";
import DeviceCard from "@/components/devices/DeviceCard";
import { useTranslation } from "@/components/providers/TranslationProvider";

export default function DevicesPage() {
  const { t } = useTranslation();

  return (
    <>
      <DevicesHero />

      <DeviceCard
        title="HP 255 G10"
        image="/images/devices/hp-255-g10.png"
        specs={[
          "HP",
          "Windows 11 Home",
          "16 RAM",
          "238 GB SSD",
          "AMD Ryzen 3 73300U",
        ]}
        usage={[
          t("devices.hp.usage.programming"),
          t("devices.hp.usage.learning"),
          t("devices.hp.usage.aiProjects"),
          t("devices.hp.usage.videoEditing"),
          t("devices.hp.usage.dailyWork"),
        ]}
        experience={t("devices.hp.experience")}
      />

      <DeviceCard
        title="Xiaomi"
        image="/images/devices/xiaomi.png"
        specs={[
          "Xiaomi M2007J17G",
          "Android 13",
          "128 GB",
          "8 RAM",
        ]}
        usage={[
          t("devices.xiaomi.usage.communication"),
          t("devices.xiaomi.usage.dailyUse"),
          t("devices.xiaomi.usage.browsing"),
          t("devices.xiaomi.usage.gaming"),
        ]}
        experience={t("devices.xiaomi.experience")}
      />
      <DeviceCard
  title="Lenovo Thinkplus LivePods LP75"
  image="/images/devices/lp75.png"
  specs={[
    "Lenovo Thinkplus",
    "LivePods LP75",
    "Bluetooth 5.3",
    "اللون: الأسود",
    "حتى 6 ساعات تشغيل",
  ]}
  usage={[
    "الاستماع للموسيقى",
    "الألعاب",
    "المكالمات",
    "الاستخدام اليومي",
  ]}
  experience="أستخدمها للاستماع والمكالمات والألعاب، وهي من أجهزتي اللاسلكية."
/>
    </>
  );
}
