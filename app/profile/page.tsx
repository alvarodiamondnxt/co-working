"use client";

import { useSession } from "@/hooks/useSession";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">My Profile</h1>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                {session.user?.name || "Not specified"}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                {session.user?.email}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                User ID
              </label>
              <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 font-mono text-sm">
                {session.user?.id}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
