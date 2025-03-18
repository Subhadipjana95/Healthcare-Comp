import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function RightNow() {
  const [isEmergency, setIsEmergency] = React.useState(false);
  const [location, setLocation] = React.useState<{ lat: number; lng: number } | null>(null);

  const handleEmergency = async () => {
    setIsEmergency(true);
    
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
            // Here we would integrate with emergency services API
            // For now, we'll just show a success message
            alert("Emergency services have been notified and are on their way to your location!");
          },
          (error) => {
            console.error("Error getting location:", error);
            alert("Unable to get your location. Please call emergency services directly.");
          }
        );
      } else {
        alert("Geolocation is not supported by your browser. Please call emergency services directly.");
      }
    } catch (error) {
      console.error("Error handling emergency:", error);
      alert("An error occurred. Please call emergency services directly.");
    } finally {
      setIsEmergency(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card className="card-hover animate-fade-in">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Emergency Assistance</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-6">
          <p className="text-center text-muted-foreground max-w-md">
            Press the emergency button below if you need immediate medical assistance.
            Emergency services will be dispatched to your current location.
          </p>
          
          <Button
            size="lg"
            variant="destructive"
            className={`w-48 h-48 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all ${isEmergency ? 'animate-pulse' : ''}`}
            onClick={handleEmergency}
            disabled={isEmergency}
          >
            {isEmergency ? "Contacting..." : "EMERGENCY"}
          </Button>

          {location && (
            <div className="text-sm text-muted-foreground text-center">
              <p>Your location has been detected.</p>
              <p>Help is on the way!</p>
            </div>
          )}

          <div className="mt-8 text-sm text-muted-foreground text-center">
            <p>For non-emergency medical assistance,</p>
            <p>please consult your healthcare provider or visit the nearest clinic.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}