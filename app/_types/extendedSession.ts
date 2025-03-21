import { Session } from "next-auth";

export interface ExtendedSession extends Session {
    user: Session['user'] & {
      guestId?: string; 
    }
  }