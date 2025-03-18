import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Hospital {
  id: string;
  name: string;
  address: string;
  phone: string;
  distance: string;
}

const mockHospitals: Hospital[] = [
  {
    id: "1",
    name: "City General Hospital",
    address: "123 Healthcare Ave, City",
    phone: "(555) 123-4567",
    distance: "2.5 km",
  },
  {
    id: "2",
    name: "St. Mary's Medical Center",
    address: "456 Medical Blvd, City",
    phone: "(555) 234-5678",
    distance: "3.8 km",
  },
  {
    id: "3",
    name: "Community Emergency Hospital",
    address: "789 Emergency Dr, City",
    phone: "(555) 345-6789",
    distance: "5.2 km",
  },
];

export function EmergencyServices() {
  const handleEmergencyCall = () => {
    // To be implemented: Integration with emergency services
    alert("Emergency services will be contacted (Feature to be implemented)");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Button
        className="w-full h-16 text-lg font-bold bg-red-600 hover:bg-red-700 transition-colors"
        onClick={handleEmergencyCall}
      >
        🚨 Emergency - Get Immediate Help
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Nearby Hospitals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockHospitals.map((hospital) => (
              <div
                key={hospital.id}
                className="p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{hospital.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {hospital.address}
                    </p>
                  </div>
                  <span className="text-sm font-medium">{hospital.distance}</span>
                </div>
                <div className="mt-2 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-sm"
                    onClick={() => {
                      window.location.href = `tel:${hospital.phone}`;
                    }}
                  >
                    📞 {hospital.phone}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-sm"
                    onClick={() => {
                      // To be implemented: Open in maps
                      alert("Open in maps feature to be implemented");
                    }}
                  >
                    🗺️ Open in Maps
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}