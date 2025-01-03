import React from "react";
import { MapPin, Mail, Phone, Building2, Calendar, Clock } from "lucide-react";
import { fetchClient } from "@/services/clients";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ClientDetailsPageProps {
  params: {
    id: string;
  };
}

async function ClientDetailsPage({ params }: ClientDetailsPageProps) {
  const { client } = await fetchClient(params.id);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      {/* Header Section */}
      <div className="flex items-start gap-6 mb-8">
        <div className="shrink-0">
          <Image
            src={client.identity.selfie || `https://api.dicebear.com/9.x/notionists/svg?seed=${client.first_name} ${client.last_name}`}
            alt={`${client.first_name} ${client.last_name}`}
            className="w-24 h-24 rounded-full object-cover"
            width={96}
            height={96}
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-2">
            {client.first_name} {client.last_name}
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <Badge variant="outline" className="capitalize">
              {client.sex.replace("_", " ")}
            </Badge>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {client.city}, {client.country}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <a
                href={`mailto:${client.email}`}
                className="text-blue-600 hover:underline"
              >
                {client.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-500" />
              <a
                href={`tel:${client.phone}`}
                className="text-blue-600 hover:underline"
              >
                {client.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-gray-500" />
              <span>{client.company_name || "Not specified"}</span>
            </div>
          </div>
        </section>

        {/* Additional Details */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span>Born: {new Date(client.dob).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-500" />
              <span>
                Client since: {new Date(client.created_at).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span>Branch ID: {client.branch_id}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ClientDetailsPage;
