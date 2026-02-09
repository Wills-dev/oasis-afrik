"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { useContactUs } from "@/lib/hooks/useContactUs";
import { companyLocations } from "@/lib/constants";
import Label from "@/components/atoms/Label/Label";
import Input from "@/components/atoms/Input/Input";
import Textarea from "@/components/atoms/TextArea/Textarea";
import Button from "@/components/atoms/Button/Button";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

const createCustomIcon = (isHeadquarters: boolean, isSelected: boolean) => {
  const color = isHeadquarters ? "#2563eb" : isSelected ? "#10b981" : "#6b7280";
  const svgIcon = `
    <svg width="32" height="32" viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  `;

  return L.divIcon({
    html: svgIcon,
    className: "custom-marker",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  hours: string;
  lat: number;
  lng: number;
  isHeadquarters?: boolean;
}

function MapController({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const ContactUsWrapper = () => {
  const { handleSubmit, isPending, formData, handleInputChange, submitStatus } =
    useContactUs();

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    companyLocations[0] || null,
  );
  const getMapCenter = (): [number, number] => {
    if (selectedLocation) {
      return [selectedLocation.lat, selectedLocation.lng];
    }
    const avgLat =
      companyLocations.reduce((sum, loc) => sum + loc.lat, 0) /
      companyLocations.length;
    const avgLng =
      companyLocations.reduce((sum, loc) => sum + loc.lng, 0) /
      companyLocations.length;
    return [avgLat, avgLng];
  };

  const mapCenter = getMapCenter();
  const mapZoom = selectedLocation ? 13 : 2;

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Get in <span className="text-green-700">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Our team is always here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label title="Full Name" required />
                <Input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("name", e.target.value)
                  }
                  placeholder="John Doe"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label title="Email Address" required />
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("email", e.target.value)
                    }
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label title="Phone Number" required />
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("phone", e.target.value)
                    }
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label title="subject" required />
                  <Input
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("subject", e.target.value)
                    }
                    placeholder=""
                  />
                </div>
                <div>
                  <Label title="Preferred Location" />
                  <Input
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("location", e.target.value)
                    }
                    placeholder=""
                  />
                </div>
              </div>

              <div>
                <Label title="Message" required />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    handleInputChange("message", e.target.value)
                  }
                  placeholder="Tell us how we can help you..."
                  rows={5}
                />
              </div>

              <Button type="submit" loading={isPending}>
                Submit
              </Button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg"
                >
                  ✓ Message sent successfully! We&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg"
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Map & Locations Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="h-80 sm:h-96 relative">
                <MapContainer
                  center={mapCenter}
                  zoom={mapZoom}
                  style={{ height: "100%", width: "100%" }}
                  scrollWheelZoom={false}
                >
                  <MapController center={mapCenter} zoom={mapZoom} />
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {companyLocations.map((location) => (
                    <Marker
                      key={location.id}
                      position={[location.lat, location.lng]}
                      icon={createCustomIcon(
                        !!location.isHeadquarters,
                        selectedLocation?.id === location.id,
                      )}
                      eventHandlers={{
                        click: () => handleLocationClick(location),
                      }}
                    >
                      <Popup>
                        <div className="p-2">
                          <h3 className="font-bold text-gray-900 mb-1">
                            {location.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {location.address}
                            <br />
                            {location.city}, {location.country}
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Phone:</strong> {location.phone}
                          </p>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsWrapper;
