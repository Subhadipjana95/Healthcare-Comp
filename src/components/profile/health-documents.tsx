import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Document {
  id: string;
  name: string;
  type: string;
  uploadDate: string;
  size: string;
}

export function HealthDocuments() {
  const [documents, setDocuments] = React.useState<Document[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newDocuments: Document[] = Array.from(files).map((file) => ({
        id: Date.now().toString(),
        name: file.name,
        type: file.type,
        uploadDate: new Date().toLocaleDateString(),
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      }));
      setDocuments([...documents, ...newDocuments]);
    }
  };

  const handleDeleteDocument = (id: string) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card className="card-hover animate-fade-in">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Health Documents</CardTitle>
          <div>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              multiple
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
            <Button
              variant="outline"
              onClick={() => document.getElementById("file-upload")?.click()}
              className="hover-scale transition-all"
            >
              Upload Documents
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {documents.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>No documents uploaded yet</p>
              <p className="text-sm mt-2">
                Upload your medical records, prescriptions, and other health-related documents
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-medium">{doc.name}</h4>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{doc.type}</span>
                      <span>{doc.size}</span>
                      <span>{doc.uploadDate}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        // Handle document preview (to be implemented)
                      }}
                      className="hover-scale transition-all"
                    >
                      Preview
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteDocument(doc.id)}
                      className="hover-scale transition-all"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}