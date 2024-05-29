import { BigInt } from "@graphprotocol/graph-ts";
import {
  KeyAdded as KeyAddedEvent,
  KeyDeleted as KeyDeletedEvent,
  KeyUpdated as KeyUpdatedEvent
} from "../generated/KeyManager/KeyManager";
import { Key } from "../generated/schema";

export function handleKeyAdded(event: KeyAddedEvent): void {
  let key = new Key(event.params.owner.toHex() + "-" + event.params.id.toString());
  key.keyId = event.params.id.toString();
  key.ipfsHash = event.params.ipfsHash;
  key.owner = event.params.owner;
  key.isDeleted = false;
  
  // Removed IPFS data fetching logic
  // Add placeholders or default values if needed
  key.keyA = "defaultKeyA";  // Placeholder or handle appropriately
  key.keyB = "defaultKeyB";  // Placeholder or handle appropriately
  
  key.updatedAt = event.block.timestamp;
  key.save();
}

export function handleKeyUpdated(event: KeyUpdatedEvent): void {
  let key = Key.load(event.params.owner.toHex() + "-" + event.params.id.toString());
  if (!key) {
    key = new Key(event.params.owner.toHex() + "-" + event.params.id.toString());
    key.keyId = event.params.id.toString();
    key.owner = event.params.owner;
    key.isDeleted = false;
  }
  key.ipfsHash = event.params.ipfsHash;
  
  // Removed IPFS data fetching logic
  // Add placeholders or default values if needed
  key.keyA = "updatedKeyA";  // Placeholder or handle appropriately
  key.keyB = "updatedKeyB";  // Placeholder or handle appropriately
  
  key.updatedAt = event.block.timestamp;
  key.save();
}

export function handleKeyDeleted(event: KeyDeletedEvent): void {
  let key = Key.load(event.params.owner.toHex() + "-" + event.params.id.toString());
  if (key) {
    key.isDeleted = true;
    key.updatedAt = event.block.timestamp;
    key.save();
  }
}
