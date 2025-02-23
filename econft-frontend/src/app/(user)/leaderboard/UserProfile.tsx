import { Dialog,DialogContent,DialogHeader,DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Leaf, MapPin } from "lucide-react";

interface UserProfileProps {
  user: {
    username: string;
    totalTrees: number;
  };
  onClose: () => void;
}

export default function UserProfile({ user, onClose }: UserProfileProps) {
  // Mock data for the user profile
  const carbonOffset = user.totalTrees * 0.06; // Assuming 0.06 metric tons of CO2 per tree per year
  const nftGallery = [
    { species: "Oak", plantedDate: "2023-05-15", location: "California, USA" },
    { species: "Pine", plantedDate: "2023-06-22", location: "Oregon, USA" },
    { species: "Maple", plantedDate: "2023-07-10", location: "Vermont, USA" },
  ];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green-600">
            {user.username}&apos;s Profile
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Stats</h3>
            <div className="space-y-2">
              <div>
                Total Trees Planted:{" "}
                <Badge
                  variant="outline"
                  className="bg-green-100 text-green-800"
                >
                  {user.totalTrees}
                </Badge>
              </div>
              <div>
                Total Carbon Offset:{" "}
                <Badge variant="outline" className="bg-blue-100 text-blue-800">
                  {carbonOffset.toFixed(2)} metric tons
                </Badge>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Tree Locations</h3>
            <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center">
              <MapPin className="h-8 w-8 text-green-600" />
              <span className="ml-2">Interactive Map Placeholder</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">NFT Gallery</h3>
          <div className="grid grid-cols-3 gap-4">
            {nftGallery.map((nft, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg">
                <Leaf className="h-8 w-8 text-green-600 mb-2" />
                <p className="font-semibold">{nft.species}</p>
                <p className="text-sm text-gray-600">
                  Planted: {nft.plantedDate}
                </p>
                <p className="text-sm text-gray-600">
                  Location: {nft.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
