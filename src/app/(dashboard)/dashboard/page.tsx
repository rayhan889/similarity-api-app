import { Metadata } from "next";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import ApiDashboard from "@/components/ApiDashboard";
import ApiRequest from "@/components/ApiRequest";

export const metadata: Metadata = {
  title: "Similarity API | Dashboard",
  description: "Free & open-source text similarity API",
};

const page = async ({}) => {

  const user = await getServerSession(authOptions);
  console.log(user?.user);

  const apiKey = await db.apiKey.findFirst({
    where: {userId : user?.user.id, enabled: true}
  })
  console.log('Api Key :' + apiKey);

  return (
    <div className="max-w-7xl mt-16 mx-auto">
      {apiKey ? <ApiDashboard /> : <ApiRequest />}
    </div>
  );
};

export default page;
