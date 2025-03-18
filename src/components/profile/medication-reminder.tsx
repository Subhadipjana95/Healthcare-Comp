import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  times: string[];
}

export function MedicationReminder() {
  const [medications, setMedications] = React.useState<Medication[]>([{
    id: "default-vitamin-d",
    name: "Vitamin D",
    dosage: "1000 IU",
    frequency: "daily",
    times: ["09:00"]
  }]);
  const [isAddingMedication, setIsAddingMedication] = React.useState(false);
  const [newMedication, setNewMedication] = React.useState({
    name: "",
    dosage: "",
    frequency: "daily",
    times: [""],
  });

  const addTimeSlot = () => {
    setNewMedication(prev => ({
      ...prev,
      times: [...prev.times, ""]
    }));
  };

  const removeTimeSlot = (index: number) => {
    setNewMedication(prev => ({
      ...prev,
      times: prev.times.filter((_, i) => i !== index)
    }));
  };

  const updateTimeSlot = (index: number, value: string) => {
    setNewMedication(prev => ({
      ...prev,
      times: prev.times.map((time, i) => i === index ? value : time)
    }));
  };

  const handleAddMedication = (e: React.FormEvent) => {
    e.preventDefault();
    const medication: Medication = {
      id: Date.now().toString(),
      ...newMedication,
    };
    setMedications([...medications, medication]);
    setNewMedication({ name: "", dosage: "", frequency: "daily", times: [""] });
    setIsAddingMedication(false);
  };

  const handleDeleteMedication = (id: string) => {
    setMedications(medications.filter((med) => med.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card className="card-hover animate-fade-in">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Medication Reminders</CardTitle>
          <Button
            onClick={() => setIsAddingMedication(!isAddingMedication)}
            variant="outline"
            className="hover-scale transition-all"
          >
            {isAddingMedication ? "Cancel" : "Add Medication"}
          </Button>
        </CardHeader>
        <CardContent>
          {isAddingMedication ? (
            <form onSubmit={handleAddMedication} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Medication Name</label>
                  <input
                    type="text"
                    value={newMedication.name}
                    onChange={(e) =>
                      setNewMedication({ ...newMedication, name: e.target.value })
                    }
                    className="w-full rounded-md border p-2"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Dosage</label>
                  <input
                    type="text"
                    value={newMedication.dosage}
                    onChange={(e) =>
                      setNewMedication({ ...newMedication, dosage: e.target.value })
                    }
                    className="w-full rounded-md border p-2"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Frequency</label>
                  <select
                    value={newMedication.frequency}
                    onChange={(e) =>
                      setNewMedication({ ...newMedication, frequency: e.target.value })
                    }
                    className="w-full rounded-md border p-2"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                <div className="space-y-2 col-span-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Dose Times</label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addTimeSlot}
                      className="hover-scale transition-all"
                    >
                      Add Time
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {newMedication.times.map((time, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="time"
                          value={time}
                          onChange={(e) => updateTimeSlot(index, e.target.value)}
                          className="flex-1 rounded-md border p-2"
                          required
                        />
                        {newMedication.times.length > 1 && (
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => removeTimeSlot(index)}
                            className="hover-scale transition-all"
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full hover-scale transition-all">
                Add Medication
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              {medications.length === 0 ? (
                <p className="text-center text-muted-foreground">
                  No medications added yet
                </p>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {medications.map((medication) => (
                    <div
                      key={medication.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium">{medication.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {medication.dosage} - {medication.frequency} at{" "}
                          {medication.times.join(", ")}
                        </p>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteMedication(medication.id)}
                        className="hover-scale transition-all"
                      >
                        Delete
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}