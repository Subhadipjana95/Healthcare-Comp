import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
}

export function UserProfile({ user }: UserProfileProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [profileData, setProfileData] = React.useState({
    name: user.name,
    email: user.email,
    phone: "",
    address: "",
    medicalHistory: "",
    allergies: "",
    emergencyContact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Handle profile update (to be implemented later)
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card className="card-hover animate-fade-in">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-16 w-16 hover-scale transition-all">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle>{user.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <Button
            variant="outline"
            onClick={() => setIsEditing(!isEditing)}
            className="hover-scale"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full rounded-md border p-2"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) =>
                    setProfileData({ ...profileData, phone: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full rounded-md border p-2"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Address</label>
                <input
                  type="text"
                  value={profileData.address}
                  onChange={(e) =>
                    setProfileData({ ...profileData, address: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full rounded-md border p-2"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Medical Information</h3>
              <div className="space-y-2">
                <label className="text-sm font-medium">Medical History</label>
                <textarea
                  value={profileData.medicalHistory}
                  onChange={(e) =>
                    setProfileData({ ...profileData, medicalHistory: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full rounded-md border p-2 min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Allergies</label>
                <textarea
                  value={profileData.allergies}
                  onChange={(e) =>
                    setProfileData({ ...profileData, allergies: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full rounded-md border p-2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Emergency Contact</label>
              <input
                type="text"
                value={profileData.emergencyContact}
                onChange={(e) =>
                  setProfileData({ ...profileData, emergencyContact: e.target.value })
                }
                disabled={!isEditing}
                className="w-full rounded-md border p-2"
              />
            </div>

            {isEditing && (
              <Button type="submit" className="w-full hover-scale transition-all">
                Save Changes
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}