import React from "react";

interface ListDataProps {
  createdAt: CreatedList;
  email: string;
  text: string;
  image?: string;
}

interface CreatedList {
  nanoseconds: number;
  seconds: number;
}

export type { ListDataProps };
