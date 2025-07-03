"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { Edit2, LogOut, Mail, User } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <div>Loading...</div>;
  if (!session) {
    router.push("/login");
    return null;
  }

  const { user } = session;

  return (
    <div className="min-h-screen bg-orange-100 flex items-center justify-center px-6 py-12">
      <div className="bg-white rounded-3xl shadow-xl max-w-4xl w-full p-8 md:p-12">
        {/* Avatar & Name */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-40 h-40 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 text-7xl font-extrabold shadow-md">
            {user.image ?(
                <Image alt="user-image" width={160} height={160} src={user.image} className="w-full h-full rounded-full object-cover" />
            ):(
                <p className="flex">{user.firstName?.[0]}{user.lastName?.[0]}</p>
            )}
          </div>
          <h1 className="mt-6 text-4xl font-extrabold text-gray-900">
            {user.firstName} {user.lastName}
          </h1>
          <div className="mt-6 flex gap-4">
            <Button
              onClick={() => alert("Edit Profile clicked!")}
              className="flex items-center gap-2  py-6 bg-orange-500 text-white rounded-xl shadow hover:bg-orange-600 transition"
            >
              <Edit2 size={20} />
              Edit Profile
            </Button>
            <Button
              onClick={() => signOut({callbackUrl:"/"})}
              className="flex items-center gap-2 py-6 border bg-white border-orange-500 text-orange-600 rounded-xl shadow hover:bg-orange-50 transition"
            >
              <LogOut size={20} />
              Logout
            </Button>
          </div>
        </div>

        {/* Profile Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-lg">
          <div className="flex items-center gap-4 p-6 bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition">
            <Mail className="text-orange-400" size={26} />
            <div>
              <div className="text-sm font-semibold text-gray-500">Email</div>
              <div className="text-gray-900 break-words">{user.email}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition">
            <User className="text-orange-400" size={26} />
            <div>
              <div className="text-sm font-semibold text-gray-500">User ID</div>
              <div className="text-gray-900 break-words">{user.id}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition">
            <User className="text-orange-400" size={26} />
            <div>
              <div className="text-sm font-semibold text-gray-500">First Name</div>
              <div className="text-gray-900">{user.firstName}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition">
            <User className="text-orange-400" size={26} />
            <div>
              <div className="text-sm font-semibold text-gray-500">Last Name</div>
              <div className="text-gray-900">{user.lastName}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
