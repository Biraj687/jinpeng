import { describe, it, expect } from "vitest";
import carData from "./car.json";
import enTranslations from "./translations/en.json";
import neTranslations from "./translations/ne.json";

describe("Jinpeng Nepal × Synergy Motors Poster Data Integrity", () => {
  it("enforces official brand, distributor, and model nomenclature", () => {
    expect(carData.brand).toBe("Jinpeng");
    expect(carData.distributor).toBe("Synergy Motors");
    expect(carData.vehicleName).toBe("Jinpeng Lingbox AT");
    expect(carData.tagline).toBe("Jinpeng Lingbox EV — Brought to you by Synergy Motors");
  });

  it("enforces official booking and financing terms", () => {
    expect(carData.bookingStatus).toBe("Open for Booking");
    expect(carData.financing.easyEmiAvailable).toBe(true);
    expect(carData.financing.emiStartingNpr).toBe(20500);
    expect(carData.financing.emiLabel).toBe("Monthly EMI starting from NPR 20,500");
    expect(carData.financing.callouts).toContain("Open for Booking");
    expect(carData.financing.callouts).toContain("Easy EMI");
    expect(carData.financing.callouts).toContain("Monthly EMI starting from NPR 20,500");
  });

  it("strictly enforces verified technical specs from posters", () => {
    expect(carData.verifiedSpecs.groundClearanceMm).toBe(175);
    expect(carData.verifiedSpecs.maxRangeKm).toBe(340);
    expect(carData.verifiedSpecs.motorPowerKw).toBe(35);
    expect(carData.verifiedSpecs.dcFastChargingAvailable).toBe(true);

    const cabinHighlight = carData.verifiedSpecs.highlights.find(
      (h) => h.title === "5-Door Compact Cabin"
    );
    expect(cabinHighlight?.description).toBe(
      "Practical 4-adult seating in a 5-door compact body."
    );
  });

  it("strictly enforces null for all unverified specs", () => {
    const unverified = carData.unverifiedSpecs;
    expect(unverified.turningRadiusM).toBeNull();
    expect(unverified.dimensionsMm).toBeNull();
    expect(unverified.wheelbaseMm).toBeNull();
    expect(unverified.curbWeightKg).toBeNull();
    expect(unverified.torqueNm).toBeNull();
    expect(unverified.topSpeedKmh).toBeNull();
    expect(unverified.batteryCapacityKwh).toBeNull();
    expect(unverified.acChargeHours).toBeNull();
    expect(unverified.dcFastChargeMinutes).toBeNull();
    expect(unverified.ipRating).toBeNull();
    expect(unverified.suspension).toBeNull();
    expect(unverified.tireSize).toBeNull();
    expect(unverified.airbags).toBeNull();
  });

  it("contains exactly 2 official variants matching poster specs and pricing", () => {
    expect(carData.variants).toHaveLength(2);

    const [baseVariant, topVariant] = carData.variants;

    // Base Variant
    expect(baseVariant.name).toBe("Base Variant");
    expect(baseVariant.fullName).toBe("Jinpeng Lingbox AT — Base Variant");
    expect(baseVariant.priceNpr).toBe(2349000);
    expect(baseVariant.rangeKm).toBe(240);
    expect(baseVariant.motorPowerKw).toBe(35);
    expect(baseVariant.groundClearanceMm).toBe(175);
    expect(baseVariant.dcFastCharging).toBe(false);

    // Top Variant (Premium)
    expect(topVariant.name).toBe("Top Variant (Premium)");
    expect(topVariant.fullName).toBe("Jinpeng Lingbox AT — Top Variant (Premium)");
    expect(topVariant.priceNpr).toBe(2599000);
    expect(topVariant.rangeKm).toBe(340);
    expect(topVariant.motorPowerKw).toBe(35);
    expect(topVariant.groundClearanceMm).toBe(175);
    expect(topVariant.dcFastCharging).toBe(true);
  });

  it("enforces verified showroom location and phone contacts with no fake numbers or emails", () => {
    expect(carData.contact.distributor).toBe("Synergy Motors");
    expect(carData.contact.location).toBe("Balkumari, Lalitpur");
    expect(carData.contact.phoneNumbers).toEqual([
      "+977 9714574057",
      "+977 9849130768",
    ]);
    expect(carData.contact.hours).toBe("Contact for showroom hours");
    expect(carData.contact.email).toBeNull();
    expect(carData.contact.emergencyHotline).toBeNull();
  });

  it("verifies i18n English and Nepali alignment with poster data", () => {
    // English
    expect(enTranslations.brand.distributor).toBe("Synergy Motors");
    expect(enTranslations.trims.base.price).toBe("NPR 23,49,000");
    expect(enTranslations.trims.top.price).toBe("NPR 25,99,000");
    expect(enTranslations.locations.address).toBe("Balkumari, Lalitpur");

    // Nepali
    expect(neTranslations.needsReview).toBe(true);
    expect(neTranslations.brand.distributor).toBe("सिनर्जी मोटर्स");
    expect(neTranslations.trims.base.price).toBe("रु २३,४९,०००");
    expect(neTranslations.trims.top.price).toBe("रु २५,९९,०००");
    expect(neTranslations.locations.address).toBe("बालकुमारी, ललितपुर");
  });
});
